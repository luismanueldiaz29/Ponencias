using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Ponencias.Models
{
    public class Administrador
    {
        [JsonProperty("id")][Key]
        public string id {get; set;}

        [JsonProperty("Nombre")][Required]
        public string Nombre {get; set;}

        [JsonProperty("Apellido")][Required]
        public string Apellido {get; set;}

        [JsonProperty("Usuario")][Required]
        public string Usuario {get; set;}

        [JsonProperty("Pass")][Required]
        public string Pass {get; set;}

        [JsonProperty("RolesId")]
        public int RolesId {get; set;}


    }
}