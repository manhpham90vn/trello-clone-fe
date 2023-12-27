import { Box } from '@mui/material'

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trelloApp.appBarHeight} - ${theme.trelloApp.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
        Board Content
    </Box>
  )
}

export default BoardContent