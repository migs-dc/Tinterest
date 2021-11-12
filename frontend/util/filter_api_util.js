class filterUtil {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(benches){
    const benchesObj = {};
    benches.forEach(bench => benchesObj[bench.id] = bench);

    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

    Object.keys(this.markers)
      .filter(benchId => !benchesObj[benchId])
      .forEach((benchId) => this.removeMarker(this.markers[benchId]))
  }

}

export default filterUtil;