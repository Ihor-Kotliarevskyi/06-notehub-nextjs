import css from "./Footer.module.css"

function Footer() {
    return (<footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: Ihor Kotliarevskyi</p>
      <p>
        Contact us:
        <a href="mailto:jagor0707@gmail.com" target="_blank"> jagor0707@gmail.com</a>
      </p>
    </div>
  </div>
</footer>)
}

export default Footer;