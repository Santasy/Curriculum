import './App.css';

function App() {
  return <div className="tamhoja">
    <div className="d-flex flex-row">
      <div className="col-8" style={{textAlign: "justify"}}>

        <p className="h1 mb-1">Sebastián Pacheco Cáceres</p>
        <p className="h5 mb-3">Estudiante de Ingeniería Civil Informática, UACh Valdivia</p>
        <p><small>
          &nbsp;&nbsp;Soy un estudiante de 23 años de la Universidad Austral de Chile (UACh)
          que se encuentra a puertas de su útimo semestre.
          Proactivo con mi aprendizaje y conocimiento;
          deliberador ágil, resiliente y estoico frente a desafíos importantes.
          <br></br>
          &nbsp;&nbsp;En busca de la especialización profesional y el camino de la investigación científica
          logré ser aceptado por el plan de vinculación universitario,
          por lo que una vez titulado continuaré con un Magister de Investigación en Informática también en la UACh,
          orientado en Algoritmos, Computación de Alto Rendimiento (HPC) y Ciencia de los Datos.
        </small>
        </p>

      </div>

      <div className="d-flex flex-column col justify-content-evenly border border-3 fs-6 p-2" style={{margin: "0 16px 10px 16px"}}>
        
        <div className="d-flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <p style={{marginLeft: "5px"}}>+569 9242 8901</p>
        </div>

        <div className="d-flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox2" viewBox="0 0 16 16">
            <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
            <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
          </svg>
          <p style={{marginLeft: "5px"}}>
            sebastianpacheco.contacto<br></br>
              <small>@gmail.com</small>
          </p>
        </div>

        <div className="d-flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <p style={{marginLeft: "5px"}}>
            Puerto Montt - Valdivia, Chile.
          </p>
        </div>

        <div className="d-flex flex-row">
          <a href="https://github.com/Santasy" style={{margin: "0 10px 0 auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sebastianpachecocaceres/" style={{marginRight: "auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>

      </div>

    </div>

    <div className="d-flex flex-row spaced">
      <div className="col-8">
        <p className="h4 myshadow">Conocimiento</p>
        <ul><small>
          <li><strong>Nivel medio-avanzado en uso de C++ y Python</strong></li>
          <li><strong>Nivel medio de entendimiento y expresión fluida en inglés</strong></li>
          <li>Nivel medio en uso de Processing, C# y Java (Maven y Fiji)</li>
          <li>Nivel medio en manipulación de datos y estadísticas</li>
          <li>Variada experiencia en Desarrollo Web con TypeScript, React y NodeJs,
            además de otras como Java (JSP) y PHP
          </li>
          <li>Experiencia en Integración Contínua con Docker y Jenkins</li>
          <li>Experiencia en uso de RabbitMQ, MongoDB y GraphQL</li>
        </small></ul>
      </div>
      <div className="col">
        <p className="h4 myshadow">Intereses</p>
        <ul>
          <li>Algoritmos y HPC</li>
          <li>Nuevas Tecnologías</li>
          <li>Inteligencia Artificial</li>
          <li>Ciberseguridad</li>
          <li>Data Science</li>
        </ul>
      </div>
    </div>



    <p className="h4 mysection mt-2">Highlights</p>

    <div className="h5 myshadow">
      - Programación Competitiva - <small>Equipos de 3 personas</small>
    </div>
    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className="h6">ACM-ICPC <strong>[~TOP 15]</strong></p>
      </div>
      <div className="col">
        <ul className="fw-light">
          <li>Competencia Regional 2016</li>
          <li>Competencia Nacional y Regional 2017</li>
          <li>Campamento, Competencia Nacional y Regional 2018</li>
          <li>Campamento 2019</li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className="h6">IEEExtreme <strong>[~TOP 3]</strong></p>
      </div>
      <div className="col">
        <ul className="fw-light">
          <li>Competencia Regional 2020</li>
        </ul>
      </div>
    </div>

    <p className="h5 myshadow"> - Asistencia Universitaria - </p>

    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className="h6">Ayudante de ramo</p>
      </div>
      <div className="col" style={{textAlign: "justify"}}>
        <ul className="fw-light">
          <li>Taller de Estructuras de Datos y Algoritmos, 1er semestre 2019</li>
          <li>Taller de Estructuras de Datos y Algoritmos, 2do semestre 2021</li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className="h6">Clases particulares (extraoficiales)</p>
      </div>
      <div className="col" style={{textAlign: "justify"}}>
        <ul className="fw-light">
          <li>
            Más de 4 años de experiencia en tutorías de materias básicas en diversos lenguajes,
            incluyendo desarrollo web y manejo de base de datos.
          </li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className="h6">Representación estudiantil</p>
      </div>
      <div className="col" style={{textAlign: "justify"}}>
        <ul className="fw-light"><small>
          <li>3 o más años en el Centro de Estudiante de la carrera,
            como Rep. de Cultura (2018), Presidente (2020) y Consejero de Escuela (2021)</li>
          <li>Paralelamente, representante de la Facultad de Ciencias de la Ingeniería
            como Secretario en la Mesa Interina Federativa UACh sede Valdivia  2021.</li>
        </small></ul>
      </div>
    </div>

    <p className="h5 myshadow"> - Otros - </p>
    
    <div className="d-flex flex-row spaced">
      <div className="col-3">
        <p className=""></p>
      </div>
      <div className="col" style={{textAlign: "justify"}}>
        <ul className="fw-light"><small>
          <li>Licenciado en Enseñanza Media del liceo Salesiano de Puerto Montt,
            con especialidad Humanista.</li>
          <li>Toco guitarra eléctrica desde hace más de 6 años; usuario de una Jackson de 7 cuerdas.</li>
          </small></ul>
      </div>
    </div>
  </div>;
}

export default App;
