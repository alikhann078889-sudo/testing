const prefix = process.env.PREVIEW_PREFIX

export default {
  ...(prefix ? { assetPrefix: prefix } : {}),
  allowedDevOrigins: ['*.daytonaproxy01.net', '*.daytona.work'],
}
