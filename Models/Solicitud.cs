using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Solicitud
    {

        [JsonProperty("SolicitudId")]
        public int SolicitudId {get; set;}

        [JsonProperty("NombrePonencia")]
        public string NombrePonencia {get; set;}

        [JsonProperty("FechaEntrega")]
        public string FechaEntrega {get; set;}

        //  una solicitud de ponencia se puede hacer si hay un evento, multiplicidad de (1:1)
        [JsonProperty("EventoId")]
        public int EventoId {get; set;}

        [JsonProperty("Evento")]
        public Evento Evento {get; set;}

        //  una solictud requiere de unos documentos que se agregar en un repositorio
        [JsonProperty("RepositorioId")]
        public int RepositorioId {get; set;}

        [JsonProperty("Repositorio")]
        public Repositorio Repositorio {get; set;}
        
        //  una solicitud de socializacion de investigacion requiere de una investigacion
        [JsonProperty("InvestigacionId")]
        public int InvestigacionId {get; set;}

        [JsonProperty("Investigacion")]
        public Investigacion Investigacion {get; set;}

        //  La solicitud es hecha por un docente
        [JsonProperty("DocenteId")]
        public int DocenteId {get; set;}

        [JsonProperty("Docente")]
        public Docente Docente {get; set;}

    }
}