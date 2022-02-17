<script>
	import '../app.css';
</script>

<link rel="stylesheet" href="https://bootswatch.com/5/litera/bootstrap.min.css" />
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Sveltekit</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarColor01"
			aria-controls="navbarColor01"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link active" href="./"
						>Home
						<span class="visually-hidden">(current)</span>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/features">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/pricing">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="container">
	<!-- Pages will be injected below -->
	<slot />
</div>
<slot />
