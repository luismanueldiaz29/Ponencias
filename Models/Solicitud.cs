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
        


    }
}