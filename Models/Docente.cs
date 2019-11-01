using Newtonsoft.Json;

namespace Ponencias.Models
{
    public class Docente
    {
        [JsonProperty("Id")]
        public int Id {get; set;}

        [JsonProperty("Nombres")]
        public string Nombres {get; set;}

        [JsonProperty("Apellidos")]
        public string Apellidos {get; set;}

        [JsonProperty("Telefono")]
        public string Telefono {get; set;}

        [JsonProperty("VinculoInst")]
        public string VinculoInst {get; set;}

        [JsonProperty("Email")]
        public string Email {get; set;}

        [JsonProperty("direccion")]
        public string direccion {get; set;}

        // un docente pertenece a una facultad

        [JsonProperty("FacultadId")]
        public int FacultadId {get; set;}

        [JsonProperty("Facultad")]
        public Facultad Facultad {get; set;}
    }
}