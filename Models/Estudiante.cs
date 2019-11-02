using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Estudiante
    {
        [JsonProperty("EstudianteId")]
        public int EstudianteId { get; set; }

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