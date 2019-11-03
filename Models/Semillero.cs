using Newtonsoft.Json;
using System.Collections.Generic;
namespace Ponencias.Models
{
    public class Semillero
    {
        [JsonProperty("id")]
        public int id { get; set; }

        [JsonProperty("NombreSemillero")]
        public int NombreSemillero { get; set; }
        
        //un semillero esta compuesto por estudiantes
        [JsonProperty("Estudiantes")]
        public List<Estudiante> Estudiantes {get;} = new List<Estudiante>(); 
    }
}