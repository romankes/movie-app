import { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { useLogic, useStyles } from './hooks';
import { Props } from './types';

import { Button, Chip, Container, Typography } from '../../../atoms';

export const FiltersModal: FC<Props> = (props) => {
  const { styles } = useStyles();

  const { genres, onReset, onSubmit, toggleSelected, checkIfSelected } =
    useLogic(props);

  return (
    <Container style={styles.wrapper}>
      <View style={styles.content}>
        <Container>
          <Typography variant="title20SemiBold">Filters</Typography>
        </Container>
        <ScrollView>
          <Container>
            <View style={styles.list}>
              {genres.map(({ id, name }) => (
                <Chip
                  onPress={toggleSelected(id)}
                  isActive={checkIfSelected(id)}
                  key={id}
                >
                  {name}
                </Chip>
              ))}
            </View>
          </Container>
        </ScrollView>
        <Container style={styles.footer}>
          <Button
            onPress={onReset}
            wrapperStyle={styles.button}
            variant="secondary"
          >
            Reset
          </Button>
          <Button onPress={onSubmit} wrapperStyle={styles.button}>
            Save
          </Button>
        </Container>
      </View>
    </Container>
  );
};
