using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ponencias.Models
{
    public class Estudiante
    {
        [JsonProperty("id")]
        public int id { get; set; }

        [JsonProperty("NombreEstudiante")]
        public int NombreEstudiante { get; set; }

        [JsonProperty("ApellidoEstudiante")]
        public int ApellidoEstudiante { get; set; }

        [JsonProperty("SemilleroId")]
        public int SemilleroId { get; set; }

        [JsonProperty("Semillero")]
        public Semillero Semillero { get; set; }
    }
}