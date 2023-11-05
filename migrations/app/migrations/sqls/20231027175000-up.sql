CREATE TABLE `color_events` (
    id uuid,
    date_created timestamp,
    color_r integer CHECK (color_r > 0 and color_r < 255),
    color_g integer CHECK (color_g > 0 and color_g < 255),
    color_b integer CHECK (color_b > 0 and color_b < 255)
)