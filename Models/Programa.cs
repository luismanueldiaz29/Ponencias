using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Programa
    {
          
        [JsonProperty("id")]
        [Required]
        public int id {get; set;}

        [JsonProperty("NombrePrograma")]
        [Required]
        public string NombrePrograma {get; set;}
        
    }
}