var Mongoose = require('Mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
    console.log('Conectado ao MongoDB.')
    // Vamos adicionar nossos Esquemas, Modelos e consultas aqui

});
var statusSchema = new Mongoose.Schema({
    id: String,
    data: Number
});
var status = Mongoose.model('status', statusSchema);

module.exports = {
    salvarStatus : (maquina => {
        
        let data = new Date();
        let statuParaSalvar = new status({
            'id' : maquina.id,
            'data' : data.getTime()
        });
        statuParaSalvar.save(function (err, usuarioParaSalvar) {
            if (err) return console.error(err);
        });
        console.log("salvou")
    }),
    pegarStatus: (maquina => {
        return new Promise(resolve=>{
            var query = status.findOne({ 'id': maquina.id }).sort('-data').select('data');
            
            // selecting the `name` and `occupation` fields
            
            let data = new Date();
            
            // execute the query at a later time
            query.exec(function (err, retorno) {
                if (err) return handleError(err);
                // Prints "Space Ghost is a talk show host."
                if(data.getTime() - retorno.data < 12000){
                    resolve(JSON.stringify({
                        'id' : maquina.id,
                        'status' : "online"
                    }))
                } else {
                    resolve(JSON.stringify({
                        'id' : maquina.id,
                        'status' : "offline"
                    }))
                }
                
            });
        })
    })
}
//Ta no grupo
var pass = "KlovisBash";
pass = encodeURIComponent(pass)

Mongoose.connect('mongodb+srv://RemoteSkeletom:' + pass + '@remotebash-9meuu.mongodb.net/test?retryWrites=true&w=majority');


