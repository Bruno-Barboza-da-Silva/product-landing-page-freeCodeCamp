import "./footer.css";

function Footer() {
  return (
    <footer id="contact">
      <p>This is a site made by Bruno Barboza.</p>
      <div>
        <div id="links">
        <a
          href="https://www.linkedin.com/in/bruno-barboza-da-silva-622939225/"
          className="profile-link"
          target="_blank"
        >
          <p>LinkedIn</p>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0zMC4wNzEsMjcuMTAxdi0wLjA3N2MtMC4wMTYsMC4wMjYtMC4wMzMsMC4wNTItMC4wNSwwLjA3N0gzMC4wNzF6Ii8+PHBhdGggZD0iTTQ5LjI2NSw0LjY2N0g3LjE0NWMtMi4wMTYsMC0zLjY1MSwxLjU5Ni0zLjY1MSwzLjU2M3Y0Mi42MTNjMCwxLjk2NiwxLjYzNSwzLjU2MiwzLjY1MSwzLjU2Mmg0Mi4xMiAgIGMyLjAxOSwwLDMuNjU0LTEuNTk3LDMuNjU0LTMuNTYyVjguMjNDNTIuOTE5LDYuMjYyLDUxLjI4Myw0LjY2Nyw0OS4yNjUsNC42Njd6IE0xOC40NzUsNDYuMzA0aC03LjQ2NVYyMy44NDVoNy40NjVWNDYuMzA0eiAgICBNMTQuNzQzLDIwLjc3N2gtMC4wNWMtMi41MDQsMC00LjEyNC0xLjcyNS00LjEyNC0zLjg4YzAtMi4yMDMsMS42Ny0zLjg4LDQuMjIzLTMuODhjMi41NTQsMCw0LjEyNSwxLjY3Nyw0LjE3NSwzLjg4ICAgQzE4Ljk2NywxOS4wNTIsMTcuMzQ1LDIwLjc3NywxNC43NDMsMjAuNzc3eiBNNDUuMzk0LDQ2LjMwNGgtNy40NjVWMzQuMjg2YzAtMy4wMTgtMS4wOC01LjA3OC0zLjc4MS01LjA3OCAgIGMtMi4wNjIsMC0zLjI5LDEuMzg5LTMuODMxLDIuNzMxYy0wLjE5NywwLjQ3OS0wLjI0NSwxLjE0OS0wLjI0NSwxLjgyMXYxMi41NDNoLTcuNDY1YzAsMCwwLjA5OC0yMC4zNTQsMC0yMi40NTloNy40NjV2My4xNzkgICBjMC45OTItMS41MywyLjc2Ni0zLjcwOSw2LjcyOS0zLjcwOWM0LjkxMSwwLDguNTk0LDMuMjExLDguNTk0LDEwLjExVjQ2LjMwNHoiLz48L2c+PC9zdmc+"
            alt=""
            className="filter-white icon"
            id="linkedin-icon"
          />
        </a>
        <a
          href="https://github.com/Bruno-Barboza-da-Silva"
          className="profile-link"
          id="profile-link"
          target="_blank"
        >
          <p>GitHub</p>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9Cl1dPjwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1NiwzMkMxMzIuMywzMiwzMiwxMzQuOCwzMiwyNjEuN2MwLDEwMS41LDY0LjIsMTg3LjUsMTUzLjIsMjE3LjljMTEuMiwyLjEsMTUuMy01LDE1LjMtMTEuMSAgIGMwLTUuNS0wLjItMTkuOS0wLjMtMzkuMWMtNjIuMywxMy45LTc1LjUtMzAuOC03NS41LTMwLjhjLTEwLjItMjYuNS0yNC45LTMzLjYtMjQuOS0zMy42Yy0yMC4zLTE0LjMsMS41LTE0LDEuNS0xNCAgIGMyMi41LDEuNiwzNC4zLDIzLjcsMzQuMywyMy43YzIwLDM1LjEsNTIuNCwyNSw2NS4yLDE5LjFjMi0xNC44LDcuOC0yNSwxNC4yLTMwLjdjLTQ5LjctNS44LTEwMi0yNS41LTEwMi0xMTMuNSAgIGMwLTI1LjEsOC43LTQ1LjYsMjMtNjEuNmMtMi4zLTUuOC0xMC0yOS4yLDIuMi02MC44YzAsMCwxOC44LTYuMiw2MS42LDIzLjVjMTcuOS01LjEsMzctNy42LDU2LjEtNy43YzE5LDAuMSwzOC4yLDIuNiw1Ni4xLDcuNyAgIGM0Mi44LTI5LjcsNjEuNS0yMy41LDYxLjUtMjMuNWMxMi4yLDMxLjYsNC41LDU1LDIuMiw2MC44YzE0LjMsMTYuMSwyMywzNi42LDIzLDYxLjZjMCw4OC4yLTUyLjQsMTA3LjYtMTAyLjMsMTEzLjMgICBjOCw3LjEsMTUuMiwyMS4xLDE1LjIsNDIuNWMwLDMwLjctMC4zLDU1LjUtMC4zLDYzYzAsNi4xLDQsMTMuMywxNS40LDExQzQxNS45LDQ0OS4xLDQ4MCwzNjMuMSw0ODAsMjYxLjcgICBDNDgwLDEzNC44LDM3OS43LDMyLDI1NiwzMnoiLz48L2c+PC9zdmc+"
            alt=""
            className="filter-white icon"
            id="github-icon"
          />
        </a>
        <a
          href="mailto:brunobarbozasilva@gmail.com"
          className="profile-link"
          id="email"
        >
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iMDUtRW1haWwiIGlkPSJfMDUtRW1haWwiPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSIyMCIgd2lkdGg9IjMwIiB4PSIxIiB5PSI2Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxIDYgMTIuNTQgMTQuNDYgMTYgMTcgMTkuNDYgMTQuNDYgMzEgNiIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMSAyNiAxMi41NCAxNC40NiAxMyAxNCIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMzEgMjYgMTkuNDYgMTQuNDYgMTkgMTQiLz48L2c+PC9zdmc+"
            alt=""
            className="filter-white icon"
            id="email-icon"
          />
          <p>E-mail</p>
        </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
