Enviar POST para localhost:8080/maquina
com um objeto json seguindo o exemplo a baixo
{
  "id" : "1234456"
}
para salvar a maquina como online
Enviar um GET para localhost:8080/status/:id
Exemplo : localhost:8080/status/1234456
Caso ele tenha seido slavo como online dentro de 2 min,
Retornar� um json afirmando status online
Exemplo: 
{
  "id":"1234456",
  "status":"online"
}
Caso n�o tenha sido salvo dentro de 2 min,
{
  "id":"1234456",
  "status":"offline"
}









