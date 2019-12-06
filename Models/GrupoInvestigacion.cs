using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
namespace Ponencias.Models
{
    public class GrupoInvestigacion
    {
          
        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("NombreGrupo")]
        [Required]
        public string NombreGrupo {get; set;}

        public Docente Docente {get; set;}
    
        public Semillero Semillero {get; set;}

    }
}