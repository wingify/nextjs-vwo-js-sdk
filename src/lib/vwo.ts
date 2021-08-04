export const userStorageService = {
  getSettings: () => {
    const settingsExpiry:any = localStorage.getItem('vwo-settings-expiry');
    // Check if there is any expiry set
    if (settingsExpiry) {
      const currentTimeStamp = +new Date();
      // calculate the timedifference
      const timeDifference = currentTimeStamp - settingsExpiry;

      // if timeleapsed is greater than 1 minute
      if (timeDifference > (60 * 1000)) { // 1 min = 60 * 1000 = 60000 ms
        // remove the stale settings and return null
        localStorage.removeItem('vwo-settings');
        return null;
      } else {
        return localStorage.getItem('vwo-settings');
      }
    } else {
      return localStorage.getItem('vwo-settings');
    }
  },
  setSettings: (settings) => {
    localStorage.setItem('vwo-settings-expiry', +new Date()); // store current timestampp
    localStorage.setItem('vwo-settings', settings);
  },
  get: (userId, campaignKey) => {
    return null;
  },
  set: (data) => {

  }
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
