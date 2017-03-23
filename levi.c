#include <stdio.h>

/* Define our methods */
int start() {
	printf("Started\n");
	return 0;
}

int stop() {
	printf("Stopped\n");
	return 0;
}

/* Define our interface */
typedef struct {
	int (*start)(void);
	int (*stop)(void);
} timer_class_t;

/* Create our construct */
timer_class_t timer_class_t_new(void) {
	timer_class_t timer_class;
	timer_class.start = start;
	timer_class.stop = stop;

	return timer_class;
}

/* Define our timer interface */
typedef struct {
	timer_class_t *time;
} timer_t;

/* Create our construct */
timer_t timer_t_new(void) {
	timer_t timer;
	return timer;
}

int main() {
	timer_t timer;						// declare variable for the timer
	timer_class_t timer_class;			// declare variable for the timer class
	
	timer = timer_t_new();				// instantiate the timer
	timer_class = timer_class_t_new();	// instantiate the timer class
	
	timer.time = &timer_class;			// assign the timer class to the timer

	timer.time->start();				// call the start method
	timer.time->stop();					// call the stop method

	return 0;
}
