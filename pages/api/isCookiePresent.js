

export default function handler(req, res) {
    const { accessToken, refreshToken } = req.cookies
    
    if(req.method === 'GET') {
        if( accessToken || refreshToken) {
            return res.status(200).json({cookie: true})
        }
        return res.status(200).json({cookie: false})
    }
    return
  }
  