import { Theme, makeStyles } from "@material-ui/core/styles";

/**
 * Sidebar theme
 */
export interface SidebarTheme{

  /**
   * 是否暗色主题
   * @default true
   */
  dark?: boolean,

  /**
   * 背景图片
   */
  backgroundImage?: string,

  /**
   * 遮罩背景色，会被遮罩背景图片覆盖
   * 遮罩以半透明的形式浮于背景图上层
   */
  maskBackground?: string,

  /**
   * 建议用linear-gradient
   */
  maskLinearGradient?: string,

}

/*const sidebarStyle = (theme:Theme) => createStyles(
  {
    drawerPaper:{
      width:"260px",
      boxShadow: theme.shadows[20],
      border: 0,
    },

    drawerPaperBak: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: 1,
    },

    background: {
      position: "absolute",
      zIndex: -1,
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        backgroundImage: "linear-gradient(45deg,#780206,#061161)",      
        fallbacks: {
          backgroundImage: "-webkit-linear-gradient(45deg,#780206,#061161)",
        },
        background: "#000",
        opacity: ".9"
      }
    },
  }
);*/

const sidebarStyle = (theme:Theme, sidebarTheme:SidebarTheme = {})=> makeStyles({
  drawerPaper:{
    width:"260px",
    boxShadow: theme.shadows[20],
    border: 0,
  },

  drawerPaperBak: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: 1,
  },
  background: {
    position: "absolute",
    zIndex: -1,
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage:"url(" + sidebarTheme?.backgroundImage + ")",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      backgroundImage: sidebarTheme?.maskLinearGradient,      
      fallbacks: {
        maskLinearGradient: "-webkit-" + sidebarTheme?.maskLinearGradient,
      },
      background: sidebarTheme?.maskBackground,
      opacity: ".9"
    }
  },
})

export default sidebarStyle;