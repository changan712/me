export class Utils {
    static  isWXBrowser(): boolean {
        let ua = navigator.userAgent.toLowerCase();
        return (/micromessenger/.test(ua)) ? true : false;
    }


    static  getUrlParam(name) {
        let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    }

    static dateTransform(dateStr: string):number {
        // dateStr="2011-08-03 09:15:11"; returned from mysql timestamp/datetime field
        return Date.parse(dateStr.replace(/-/g,'/'));
    }
}

