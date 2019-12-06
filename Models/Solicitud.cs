using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ponencias.Models
{
    public class Solicitud
    {

        [JsonProperty("id")]
        public int id {get; set;}

        [JsonProperty("NombrePonencia")]
        public string NombrePonencia {get; set;}

        [JsonProperty("FechaEntrega")]
        public string FechaEntrega {get; set;}
        
        [JsonProperty("DocenteId")]
        public string DocenteId {get; set;}

        [JsonProperty("Docente")]
        public Docente Docente {get; set;}
    
        [JsonProperty("Transporte")]
        public Transporte Transporte {get; set;}

        [JsonProperty("Evento")]
        public Evento Evento {get; set;}
    
        [JsonProperty("Repositorio")]
        public Repositorio Repositorio {get; set;}
    
        [JsonProperty("Investigacion")]
        public Investigacion Investigacion {get; set;}
    }
}