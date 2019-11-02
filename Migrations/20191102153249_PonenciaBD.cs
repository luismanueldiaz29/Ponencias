using Microsoft.EntityFrameworkCore.Migrations;

namespace Ponencias.Migrations
{
    public partial class PonenciaBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Evento",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreEvento = table.Column<string>(nullable: true),
                    LinkEvento = table.Column<string>(nullable: true),
                    Pais = table.Column<string>(nullable: true),
                    Telefono = table.Column<int>(nullable: false),
                    ValorInscripcion = table.Column<decimal>(nullable: false),
                    FechaEvento = table.Column<string>(nullable: true),
                    FechaInicio = table.Column<string>(nullable: true),
                    FechaFinal = table.Column<string>(nullable: true),
                    NumeroDias = table.Column<int>(nullable: false),
                    TipoTransporte = table.Column<string>(nullable: true),
                    ValorTrasporte = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Facultad",
                columns: table => new
                {
                    FacultadId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreFacultad = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facultad", x => x.FacultadId);
                });

            migrationBuilder.CreateTable(
                name: "Investigacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreInvestigacion = table.Column<string>(nullable: true),
                    GrupoId = table.Column<string>(nullable: true),
                    GrupoInvestigacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Investigacion", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Repositorio",
                columns: table => new
                {
                    RepositorioId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Repositorio", x => x.RepositorioId);
                });

            migrationBuilder.CreateTable(
                name: "Semillero",
                columns: table => new
                {
                    SemilleroId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreSemillero = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Semillero", x => x.SemilleroId);
                });

            migrationBuilder.CreateTable(
                name: "Docente",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<int>(nullable: false),
                    Nombres = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    VinculoInst = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    direccion = table.Column<string>(nullable: true),
                    FacultadId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docente", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Docente_Facultad_FacultadId",
                        column: x => x.FacultadId,
                        principalTable: "Facultad",
                        principalColumn: "FacultadId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Programa",
                columns: table => new
                {
                    ProgramaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombrePrograma = table.Column<string>(nullable: true),
                    FacultadId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programa", x => x.ProgramaId);
                    table.ForeignKey(
                        name: "FK_Programa_Facultad_FacultadId",
                        column: x => x.FacultadId,
                        principalTable: "Facultad",
                        principalColumn: "FacultadId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Estudiante",
                columns: table => new
                {
                    EstudianteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreEstudiante = table.Column<int>(nullable: false),
                    ApellidoEstudiante = table.Column<int>(nullable: false),
                    SemilleroId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiante", x => x.EstudianteId);
                    table.ForeignKey(
                        name: "FK_Estudiante_Semillero_SemilleroId",
                        column: x => x.SemilleroId,
                        principalTable: "Semillero",
                        principalColumn: "SemilleroId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GrupoInvestigacion",
                columns: table => new
                {
                    GrupoInvestigacionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombreGrupo = table.Column<string>(nullable: true),
                    DocenteId = table.Column<int>(nullable: false),
                    InvestigacionId = table.Column<int>(nullable: false),
                    SemilleroId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GrupoInvestigacion", x => x.GrupoInvestigacionId);
                    table.ForeignKey(
                        name: "FK_GrupoInvestigacion_Docente_DocenteId",
                        column: x => x.DocenteId,
                        principalTable: "Docente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GrupoInvestigacion_Investigacion_InvestigacionId",
                        column: x => x.InvestigacionId,
                        principalTable: "Investigacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GrupoInvestigacion_Semillero_SemilleroId",
                        column: x => x.SemilleroId,
                        principalTable: "Semillero",
                        principalColumn: "SemilleroId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Solicitud",
                columns: table => new
                {
                    SolicitudId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NombrePonencia = table.Column<string>(nullable: true),
                    FechaEntrega = table.Column<string>(nullable: true),
                    EventoId = table.Column<int>(nullable: false),
                    RepositorioId = table.Column<int>(nullable: false),
                    InvestigacionId = table.Column<int>(nullable: false),
                    DocenteId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Solicitud", x => x.SolicitudId);
                    table.ForeignKey(
                        name: "FK_Solicitud_Docente_DocenteId",
                        column: x => x.DocenteId,
                        principalTable: "Docente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Solicitud_Evento_EventoId",
                        column: x => x.EventoId,
                        principalTable: "Evento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Solicitud_Investigacion_InvestigacionId",
                        column: x => x.InvestigacionId,
                        principalTable: "Investigacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Solicitud_Repositorio_RepositorioId",
                        column: x => x.RepositorioId,
                        principalTable: "Repositorio",
                        principalColumn: "RepositorioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Docente_FacultadId",
                table: "Docente",
                column: "FacultadId");

            migrationBuilder.CreateIndex(
                name: "IX_Estudiante_SemilleroId",
                table: "Estudiante",
                column: "SemilleroId");

            migrationBuilder.CreateIndex(
                name: "IX_GrupoInvestigacion_DocenteId",
                table: "GrupoInvestigacion",
                column: "DocenteId");

            migrationBuilder.CreateIndex(
                name: "IX_GrupoInvestigacion_InvestigacionId",
                table: "GrupoInvestigacion",
                column: "InvestigacionId");

            migrationBuilder.CreateIndex(
                name: "IX_GrupoInvestigacion_SemilleroId",
                table: "GrupoInvestigacion",
                column: "SemilleroId");

            migrationBuilder.CreateIndex(
                name: "IX_Programa_FacultadId",
                table: "Programa",
                column: "FacultadId");

            migrationBuilder.CreateIndex(
                name: "IX_Solicitud_DocenteId",
                table: "Solicitud",
                column: "DocenteId");

            migrationBuilder.CreateIndex(
                name: "IX_Solicitud_EventoId",
                table: "Solicitud",
                column: "EventoId");

            migrationBuilder.CreateIndex(
                name: "IX_Solicitud_InvestigacionId",
                table: "Solicitud",
                column: "InvestigacionId");

            migrationBuilder.CreateIndex(
                name: "IX_Solicitud_RepositorioId",
                table: "Solicitud",
                column: "RepositorioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Estudiante");

            migrationBuilder.DropTable(
                name: "GrupoInvestigacion");

            migrationBuilder.DropTable(
                name: "Programa");

            migrationBuilder.DropTable(
                name: "Solicitud");

            migrationBuilder.DropTable(
                name: "Semillero");

            migrationBuilder.DropTable(
                name: "Docente");

            migrationBuilder.DropTable(
                name: "Evento");

            migrationBuilder.DropTable(
                name: "Investigacion");

            migrationBuilder.DropTable(
                name: "Repositorio");

            migrationBuilder.DropTable(
                name: "Facultad");
        }
    }
}
