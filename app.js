const Processor = require("./Processor");
const Reader = require("./Reader");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter")

var leitor = new Reader();
var escritor = new Writer();

async function main(){

    var dados = await leitor.Read("caminho do arquivo CSV");

    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    // usuarios.rows.push(["Joao", "PHP", "PHP", "32"]);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html",html); 

    PDFWriter.WritePDF(Date.now() + ".PDF",html); 

}

main();