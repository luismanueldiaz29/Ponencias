using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
namespace Ponencias.Models
{
    public class Evento
    {
        [JsonProperty("id")]
        [Required]
        public int id {get; set;}

        [JsonProperty("NombreEvento")]
        [Required]
        public string NombreEvento {get; set;}
        
        [JsonProperty("LinkEvento")]
        public string LinkEvento {get; set;}

        [JsonProperty("Pais")]
        [Required]
        public string Pais {get; set;}

        [JsonProperty("Ciudad")]
        public string Ciudad{get;set;}

        [JsonProperty("Email")]
        public string Email{get;set;}

        [JsonProperty("Telefono")]
        public string Telefono {get; set;}

        [JsonProperty("ValorInscripcion")]
        [Required]
        public decimal ValorInscripcion {get; set;}

        [JsonProperty("FechaEvento")]
        [Required]
        public string FechaEvento {get; set;}

        [JsonProperty("FechaInicio")]
        public string FechaInicio {get; set;}

        [JsonProperty("FechaFinal")]
        public string FechaFinal {get; set;}

        [JsonProperty("Entidad")]
        public string Entidad{get;set;}

        [JsonProperty("NumeroDias")]
        public int NumeroDias {get; set;}

        [JsonProperty("TipoTransporte")]
        [Required]
        public string TipoTransporte {get; set;}

        [JsonProperty("ValorTrasporte")]
        [Required]
        public decimal ValorTrasporte {get; set;}
        

    }
}