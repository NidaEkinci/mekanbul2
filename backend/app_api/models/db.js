var mongoose = require('mongoose');

var dbURI = "mongodb+srv://nidaekinci:nida@cluster0.15izu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {
    console.log(dbURI + " adresine bağlandı");
});
mongoose.connection.on("disconnected", function () {
    console.log(dbURI + " bağlantısı koptu");
});

process.on("SIGINT", function () {
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});
require("./venue");