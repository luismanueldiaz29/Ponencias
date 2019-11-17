using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Ponencias.Models
{
    public class GrupoInvestigacion
    {
          
        [JsonProperty("id")]
        [Required]
        public int id {get; set;}

        [JsonProperty("NombreGrupo")]
        [Required]
        public string NombreGrupo {get; set;}
        
    }
}