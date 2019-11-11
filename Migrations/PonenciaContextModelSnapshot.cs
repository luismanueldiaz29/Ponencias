﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Ponencias.Models;

namespace Ponencias.Migrations
{
    [DbContext(typeof(PonenciaContext))]
    partial class PonenciaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Ponencias.Models.Docente", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombres")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefono")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VinculoInst")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("direccion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Docente");
                });

            modelBuilder.Entity("Ponencias.Models.Estudiante", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ApellidoEstudiante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombreEstudiante")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Estudiante");
                });

            modelBuilder.Entity("Ponencias.Models.Evento", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ciudad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Entidad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FechaEvento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FechaFinal")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FechaInicio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LinkEvento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombreEvento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumeroDias")
                        .HasColumnType("int");

                    b.Property<string>("Pais")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefono")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoTransporte")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("ValorInscripcion")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("ValorTrasporte")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("id");

                    b.ToTable("Evento");
                });

            modelBuilder.Entity("Ponencias.Models.Solicitud", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FechaEntrega")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombrePonencia")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Solicitud");
                });
#pragma warning restore 612, 618
        }
    }
}
