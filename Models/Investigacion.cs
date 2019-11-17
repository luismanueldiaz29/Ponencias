using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Investigacion
    {
          
        [JsonProperty("id")]
        [Required]
        public int id {get; set;}

        [JsonProperty("NombreInvestigacion")]
        [Required]
        public string NombreInvestigacion {get; set;}
        
    }
}