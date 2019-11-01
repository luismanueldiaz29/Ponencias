using Newtonsoft.Json;
using System.Collections.Generic;
namespace Ponencias.Models
{
    public class Facultad
    {
        [JsonProperty("FacultadId")]
        public int FacultadId {get; set;}

        [JsonProperty("NombreFacultad")]
        public string NombreFacultad {get; set;}

        //  varios docentes pueden pertenecer a una facultad
        [JsonProperty("Docentes")]
        public List<Docente> Docentes {get;} = new List<Docente>();

        //  varios programas pueden pertenecer a una facultad
        [JsonProperty("Programas")]
        public List<Programa> Programas {get;} = new List<Programa>();
    }
}