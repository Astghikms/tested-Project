function Genres(name, popArtist, history) {
    this.name = name || "N/A";
    this.popArtist = popArtist || "N/A";
    this.history = history || "N/A";
    Object.defineProperty(Genres, "name", {writable: false});
}

Genres.prototype.hasInfo = function (matcher) {
    for (var prop in this) {
        var result = this[prop].match(matcher) || "exist";
        if (result !== "exist") {
            return true;
        }
    }
    return false;
}

Genres.prototype.toString = function () {
    return "Name: " + this.name +
        "\n" + "Pop Artist: " + this.popArtist + "\n" + "History: " + this.history;
}

var jazz = new Genres("jazz", ["Ray charles", "Louis Armstrong"], "mmmmmmmmmm");
var rock = new Genres("rock", "Pink Floyd, aaaaa", "bbbbb");

var validInstruments = ["Trumpet", "Piano", "Cornet", "Cielo", "Violin", "Hang"];

function InstrumentalGenre(instrument) {
    for (var valInstr in validInstruments) {
        if (instrument === validInstruments[valInstr]) {
            this.instrument = instrument;
            return;
        }
        else
        {
            this.instrument = "N/A";
        }
    }
}

InstrumentalGenre.prototype = new Genres();
//InstrumentalGenre.prototype.constructor = InstrumentalGenre();



InstrumentalGenre.prototype.toString = function () {
    return "Name: " + this.name +
        "\n" + "Pop Artist: " + this.popArtist + "\n" + "History: " + this.history + "\n" + "Insturments: " + this.instrument;
}

function FolkInstrumentalGerne(country) {
    this.country = country || "N/A";
}

FolkInstrumentalGerne.prototype = new InstrumentalGenre();
//InstrumentalGenre.prototype.constructor = InstrumentalGenre();

InstrumentalGenre.prototype.toString = function () {
    return "Name: " + this.name +
        "\n" + "Pop Artist: " + this.popArtist + "\n" + "History: " + this.history + "\n" +
        "Insturments: " + this.instrument + "\n" + "Country: " + this.country;
}

var trumpetJazz = new InstrumentalGenre("trumpet");
trumpetJazz.name = "Jazz";
console.log(trumpetJazz);
