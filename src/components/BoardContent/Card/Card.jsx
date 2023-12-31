import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import AttachmentIcon from '@mui/icons-material/Attachment'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function Card({ card }) {
  const shouldShowCardAction = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    )
  }

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,.2)',
        overflow: 'unset',
        display: card?.fe_place_holder ? 'none' : 'block',
        border: '1px solid transparent',
        '&:hover': {
          borderColor: (theme) => theme.palette.primary.main
        }
      }}
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}
        />
      )}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
        {card?.description && (
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {card?.description}
          </Typography>
        )}
      </CardContent>
      {shouldShowCardAction() && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && (
            <Button
              size='small'
              startIcon={<GroupIcon />}
            >
              {card?.memberIds?.length}
            </Button>
          )}

          {!!card?.comments?.length && (
            <Button
              size='small'
              startIcon={<ModeCommentIcon />}
            >
              {card?.comments?.length}
            </Button>
          )}

          {!!card?.attachments?.length && (
            <Button
              size='small'
              startIcon={<AttachmentIcon />}
            >
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}
