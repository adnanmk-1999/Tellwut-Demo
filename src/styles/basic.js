/**
 * All Common Styles
 */

import theme from './themes';

export const regularText = {
  fontSize: theme.FONT_SIZE,
  fontFamily: theme.FONT_FAMILY,
  color: theme.HEADER_TEXT_COLOR,
};

export const headerTextBold = {
  ...regularText,
  fontSize: theme.FONT_SIZE_XXXXXL,
  fontWeight: theme.FONT_WEIGHT_MEDIUM,
};

export const normalText = {
  ...regularText,
  color: theme.NORMAL_TEXT_COLOR,
  fontWeight: theme.FONT_WEIGHT_NORMAL,
};

export const dateText = {
  ...regularText,
  color: theme.DATE_TEXT_COLOR,
  fontSize: theme.FONT_SIZE_XSS,
};

export const upperCaseText = {
  ...regularText,
  fontSize: theme.FONT_SIZE_XS,
  color: theme.LABEL_LIGHT_GREY_COLOR,
};

export const regularTextBold = {
  ...regularText,
  fontWeight: theme.FONT_WEIGHT_MEDIUM,
  color: theme.BLUE_COLOR,
};

export const boldText = {
  color: theme.BLACK_COLOR,
  fontWeight: theme.FONT_WEIGHT_MEDIUM,
  fontSize: theme.FONT_SIZE_XL,
  fontFamily: theme.FONT_FAMILY_BOLD,
};

export const PABottomText = {
  ...regularText,
  color: theme.BLACK_COLOR,
  fontSize: theme.FONT_SIZE_XL,
  fontWeight: theme.FONT_WEIGHT_NORMAL,
};

export const smallText = {
  fontSize: theme.FONT_SIZE_S,
  fontFamily: theme.FONT_FAMILY,
  color: theme.LIGHT_GREY_TEXT,
};
export const flexRow = {
  flex: 1,
  flexDirection: 'row',
};

export const flexColumn = {
  flex: 1,
  flexDirection: 'column',
};

export const colors = {
  progressBar: theme.PROGRES_BAR,
  blue: theme.BLUE,
  green: theme.GREEN,
  lightGrey: theme.LIGHT_GREY,
  black: theme.BLACK_COLOR,
  white: theme.WHITE_COLOR,
  dashboardGrey: theme.DASHBOARD_GREY,
  lightGrayishBlue: theme.LIGHT_GRAYISH_BLUE,
  horizontalDividerColor: theme.HORIZONTAL_DIVIDER_COLOR,
  rectangleShapeBorder: theme.RECTANGLE_SHAPE_BORDER,
  verticalLine: theme.VERTICAL_LINE,
  forgotPasswordText: theme.FORGOT_PASSWORD_TEXT_COLOR,
  errorTextRed: theme.ERROR_TEXT_RED,
  tabTextColor: theme.TAB_TEXT_COLOR,
  statusGreyColor: theme.STATUS_GREY_COLOR,
  statusYellowColor: theme.STATUS_YELLOW_COLOR,
  statusGreenColor: theme.STATUS_GREEN_COLOR,
  searchBackground: theme.SEARCH_BACKGROUND,
  backgroundColor: theme.BACKGROUND,
  themeBlue: theme.BLUE_COLOR,
  statusBlueColor: theme.STATUS_BLUE_COLOR,
  studentBackgroundColor: theme.STUDENT_BACKGROUND_COLOR,
  profileLabel: theme.PROFILE_LABEL_COLOR,
  genderUnhighlighted: theme.GENDER_UNHIGHLIGHTED,
  buttonColour: theme.BUTTON_BLUE_COLOR,
  borderColour: theme.INPUT_BORDER_COLOR,
  horizontalLine: theme.HORIZONTAL_LINE_COLOR,
  flagBackground: theme.FLAG_BACKGROUND,
  attachmentBorder: theme.ATTACHMENT_BORDER_COLOR,
  lightBlack: theme.LIGHT_BLACK,
  infoYellow: theme.INFO_YELLOW,
  infoYellow_background: theme.INFO_YELLOW_BACKGROUND,
  infoRed: theme.INFO_RED,
  infoRedBackground: theme.INFO_RED_BACKGROUND,
  modalBarColor: theme.MODAL_BAR_COLOR,
  statusLightGray: theme.STATUS_LIGHT_GREY,
  skillProgressGray: theme.SKILL_PROGRESS_GREY,
  skillProgressBlue: theme.SKILL_PROGRESS_BLUE,
};
