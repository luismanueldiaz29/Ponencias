using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Programa
    {
          
        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("NombrePrograma")]
        [Required]
        public string NombrePrograma {get; set;}

        [JsonProperty("facultadId")]
        public int facultadId {get; set;}
        
        [JsonProperty("facultad")]
        public Facultad facultad {get; set;}
        
    }
}