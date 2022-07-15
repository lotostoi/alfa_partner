<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class  ClearAll extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'clearAll';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Очищает все кеши';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $commands = [
            'event:clear',
            'view:clear',
            'cache:clear',
            'route:clear',
            'config:clear',
            'clear-compiled',
            //'debugbar:clear',
        ];
        foreach ($commands as $command) {
            $this->call($command);
        }
        $this->info('Files cached successfully!');

        return Command::SUCCESS;
    }
}