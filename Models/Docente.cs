using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Docente
    {
        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("Identificacion")]
        public int Identificacion {get; set;}

        [JsonProperty("Nombres")]
        public string Nombres {get; set;}

        [JsonProperty("Apellidos")]
        public string Apellidos {get; set;}

        [JsonProperty("Telefono")]
        public string Telefono {get; set;}

        [JsonProperty("VinculoInst")]
        public string VinculoInst {get; set;}

        [JsonProperty("Email")]
        public string Email {get; set;}

        [JsonProperty("direccion")]
        public string direccion {get; set;}

     
    }
}