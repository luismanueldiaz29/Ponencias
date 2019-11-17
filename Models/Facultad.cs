using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Facultad
    {
          
        [JsonProperty("id")]
        [Required]
        public int id {get; set;}

        [JsonProperty("NombreFacultad")]
        [Required]
        public string NombreFacultad {get; set;}
        
    }
}