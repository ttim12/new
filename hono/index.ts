import 'server-only'
import { Hono } from 'hono'
import settings from '~/hono/settings'
import file from '~/hono/file'
import images from '~/hono/images'
import albums from '~/hono/albums'
import alist from '~/hono/storage/alist'
import download from '~/hono/download'
import { HTTPException } from 'hono/http-exception'

const route = new Hono()

route.onError((err, c) => {
  if (err instanceof HTTPException) {
    console.error(err)
    return err.getResponse()
  }
  // ...
})

route.route('/settings', settings)
route.route('/file', file)
route.route('/images', images)
route.route('/albums', albums)
route.route('/storage/alist', alist)
route.route('/download', download)

export default route