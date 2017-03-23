<?php

for($i=0;$i<10;$i++) {
	exec('./run test.eps test.png', $output);
	echo $output[0] . ' ' . $output[1] . "\n";
}
