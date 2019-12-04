using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class Investigacion
    {
          
        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("NombreInvestigacion")]
        [Required]
        public string NombreInvestigacion {get; set;}
        
        [JsonProperty("SolicitudId")]
        public string SolicitudId {get; set;}

        [JsonProperty("Solicitud")]
        public Solicitud Solicitud {get; set;}
    }
}