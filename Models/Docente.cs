using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Ponencias.Models
{
    public class Docente
    {
        [JsonProperty("id")]
        [Required]
        public string id {get; set;}

        [JsonProperty("Identificacion")]
        [Required]
        public int Identificacion {get; set;}

        [JsonProperty("Nombres")]
        [Required]
        public string Nombres {get; set;}

        [JsonProperty("Apellidos")]
        [Required]
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