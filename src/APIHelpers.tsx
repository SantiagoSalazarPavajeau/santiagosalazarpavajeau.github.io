import {Post} from './components/PostCard'
// import {sortPosts} from './dataServices'


export const projects = [
  {
    title: "Observability Stack with Chaos Testing",
    description: "A full observability stack setup using Grafana, Prometheus, Loki, and Helm, with local chaos testing to validate system resilience.",
    demo: "",
    github: "https://github.com/SantiagoSalazarPavajeau/observability_project",
    stack: "Helm, Prometheus, Grafana, Loki, Chaos Mesh, Kubernetes"
  },
  {
    title: "ELK Stack on Minikube",
    description: "Custom ELK deployment optimized for local development using Minikube, Terraform, and Helm.",
    demo: "",
    github: "https://github.com/SantiagoSalazarPavajeau/elk-stack-minikube",
    stack: "Terraform, Helm, Elasticsearch, Logstash, Kibana, Minikube"
  },
  {
    title: "Database Reliability Engineering Projects",
    description: "A set of Database Reliability Engineering (DBRE) practice projects focusing on backup strategies, failover, and monitoring.",
    demo: "",
    github: "https://github.com/SantiagoSalazarPavajeau/dbre_projects",
    stack: "Shell, MySQL/PostgreSQL, Backup & Recovery Tools"
  },
  {
    title: "Chords and Beats",
    description: "A music/game app where chords can be combined and saved into a song with a few clicks.",
    demo: "https://santiagosalazarpavajeau.github.io/chords_beats_frontend/index.html",
    github: "https://github.com/SantiagoSalazarPavajeau/chords_beats_frontend",
    stack: "JavaScript, Rails"
  },
  {
    title: "Young Papas Hobbies",
    description: "A community for young fathers to document and share their hobbies and skills.",
    demo: "http://pure-island-81017.herokuapp.com/",
    github: "https://github.com/SantiagoSalazarPavajeau/young_papas_hobbies",
    stack: "Ruby on Rails"
  }
]




export const postsURL: string = "https://dev.to/api/articles?username=santispavajeau"



export const getPosts = async (postsURL: string) => {
    await fetch(postsURL)
            .then(resp=> resp.json())
            .then((posts) => {return posts})
}

