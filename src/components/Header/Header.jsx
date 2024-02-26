import styles from "./Header.module.css";
import Logo from "/src/assets/Svg/logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      <div className={styles.pageTitle}>
        <p>
          Nullam luctus vel enim vitae rhoncus. Vestibulum eget malesuada nisi,
          eget dapibus tortor. Maecenas diam erat, dapibus ac tellus ut, posuere
          scelerisque libero. Vivamus elit tellus, facilisis dignissim consequat
          et, volutpat non lectus. Suspendisse efficitur nunc lacus, eget
          pharetra velit placerat in. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Quisque ultrices risus
          sagittis est aliquam, et placerat quam lacinia. Proin iaculis ex id
          leo venenatis tincidunt. Suspendisse mattis risus velit, dapibus
          hendrerit lacus congue at. Nullam feugiat lectus at tellus gravida, eu
          bibendum elit finibus. Donec eu risus eget odio pharetra ornare sit
          amet vel odio. Suspendisse mattis, dui at pharetra tincidunt, metus
          leo molestie turpis, a eleifend magna nisi vel lorem.
        </p>
      </div>
    </div>
  );
}

export default Header;
