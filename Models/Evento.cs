namespace Ponencias.Models
{
    public class Evento
    {
        [JsonProperty("EventoId")]
        public int EventoId {get; set;}

        [JsonProperty("NombreEvento")]
        public string NombreEvento {get; set;}
        
        [JsonProperty("LinkEvento")]
        public string LinkEvento {get; set;}

        [JsonProperty("Pais")]
        public string Pais {get; set;}

        [JsonProperty("Telefono")]
        public int Telefono {get; set;}

        [JsonProperty("ValorInscripcion")]
        public decimal ValorInscripcion {get; set;}

        [JsonProperty("FechaEvento")]
        public date FechaEvento {get; set;}

        [JsonProperty("FechaInicio")]
        public date FechaInicio {get; set;}

        [JsonProperty("FechaFinal")]
        public date FechaFinal {get; set;}

        [JsonProperty("NumeroDias")]
        public int NumeroDias {get; set;}

        [JsonProperty("TipoTransporte")]
        public string TipoTransporte {get; set;}

        [JsonProperty("ValorTrasporte")]
        public decimal ValorTrasporte {get; set;}
        
    }
}