namespace Ponencias.Models
{
    public class Solicitud
    {

        [JsonProperty("SolicitudId")]
        public int SolicitudId {get; set;}

        [JsonProperty("NombrePonencia")]
        public string NombrePonencia {get; set;}

        [JsonProperty("FechaEntrega")]
        public date FechaEntrega {get; set;}

        //  una solicitud de ponencia se puede hacer si hay un evento, multiplicidad de (1:1)
        [JsonProperty("EventoId")]
        public int EventoId {get; set;}

        [JsonProperty("Evento")]
        public Evento Evento {get; set;}

        
    }
}