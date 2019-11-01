using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Semillero
    {
        [JsonProperty("SemilleroId")]
        public int SemilleroId { get; set; }

        [JsonProperty("NombreSemillero")]
        public int NombreSemillero { get; set; }

    }
}