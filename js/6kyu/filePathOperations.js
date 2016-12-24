class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }
  
  extension() {
    return this.filepath.split(".")[1];
  }
  
  filename() {
    var parts = this.filepath.split("/");
    return parts[parts.length-1].split(".")[0];
  }
  
  dirpath() {
    return this.filepath.substr(0,this.filepath.lastIndexOf("/")+1);
  }
}