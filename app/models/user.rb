class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :pins
  has_many :boards

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.base64(64)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end