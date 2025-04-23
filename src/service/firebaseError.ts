import { strings } from "../utils/strings";

export const getFirebaseErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case strings.authemailalreadyinuse:
        return strings.thisemailalreadyinuse;
      case strings.authinvalidemail:
        return strings.authinvalidemail;
      case strings.authweakpassword:
        return strings.passwordatleast6char;
      case strings.authusernotfound:
        return strings.nouserfoundwiththisemail;
      case strings.authwrongpassword:
        return strings.incorrectpassword;
      case strings.authnetworkrequestfailed:
        return strings.networkerrorcheckconnection;
      default:
        return strings.pleasetryagain;
    }
  };
  