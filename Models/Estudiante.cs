using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ponencias.Models
{
    public class Estudiante
    {
        [JsonProperty("id")]
        public int id { get; set; }

        [JsonProperty("NombreEstudiante")]
        public string NombreEstudiante { get; set; }

        [JsonProperty("ApellidoEstudiante")]
        public string ApellidoEstudiante { get; set; }

    }
}